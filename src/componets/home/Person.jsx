
const Person = ({person}) => {
    return (
        <div className="person">
            <div className="img">
                <img src={person.blog_img} alt="" />
            </div>

            <div className="detials">

                <div className="sm-img">
                    <img src={person?.profile_img} alt="" />
                </div>

                <div>
                    <h2>
                        {person?.name}
                    </h2>
                    <p>{person?.description} </p>
                </div>


            </div>
        </div>
    )
}

export default Person