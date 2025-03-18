
const Title = ({text1,text2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
        <p className="text-3xl font-bold text-gray-800 text-center">{text1} <span className="text-blue-600 font-bold">{text2}</span> </p>
        {/* this will create a line like dash ----  */}
        <p className="w-8 sm:w-12 h-[1px] lg:h-[2px] bg-gray-700"></p>
    </div>
  )
}

export default Title
