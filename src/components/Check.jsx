import { icon_list } from "../assets/images"


function Check({data}) {
  return (
    <div className="flex items-start gap-3 my-4">
      <img src={icon_list} alt="" />
      <div className="data">
        <p className="text-base text-charcolgrey">{data}</p>
      </div>
    </div>
  )
}

export default Check
