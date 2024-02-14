import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({children}) => {

  // page
  const title = {
    0: 'Event Customatization',
    1: 'Event Customatization',
    2: 'Event Basic settings',
    3: 'name and description',
    4: 'Give your event An image'
  };

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    // data fileds
    cotgory: '',
    tags: '',
    startDate:'',
    startTime:'',
    endDate : '',
    endTime : '',
    venue : '',
    isHired: false,
    locationCountry: '',
    locationCity: '',
    locationvilage: '',
    mapePoits: '',
    eventname: '',
    eventdescription: '',
    image: ''
  })

  const handleChange = (e)=>{
    const type = e.target.type;

    const name = e.target.name;

    const value = type ==="checkbox" ? e.target.checked : e.target.value;
    
    setFormData(prevData =>({
      ...prevData,
      [name] : value
    }))
  }

  const {cotgory,...requiredInputs} = formData;

  const canSubmite = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1;

  const disablePrev = page === 0;



  // button hind

  const prevHide = page === 0 && "remove_btn";
  const nextHide = page === Object.keys(title).length - 1 && 'remove_btn';
  const submitHide = page !== Object.keys(title).length -1 && 'remove_btn'; 
 
   
  return (
    <FormContext.Provider value={{title, page, setPage, formData, setFormData, canSubmite, disablePrev, prevHide, nextHide, submitHide}} >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext;