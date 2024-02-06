import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement"

const SkelotonPeople = ({theme}) => {

    const themeClass = theme || 'light';

  return (
    <div className={`skeloton-wrapper ${themeClass}`}>

        <div className="skeloton-people">
            <div>
                <SkeletonElement type={"image"} />
            </div>
            <div>
                 <div>
                    <SkeletonElement type={'avatar'} />
                 </div>
                 <div>
                    <SkeletonElement type={'title'} />
                    <SkeletonElement type={'text'} />
                    <SkeletonElement type={'text'} />
                 </div>
            </div>
        </div>

        <Shimmer />
    </div>
  )
}

export default SkelotonPeople