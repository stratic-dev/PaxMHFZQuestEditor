export const NumeralInput = ({label, defaultValue, onChange, size}) => {

  const sizeToUnit = (size) => {
    switch(size){
      case "sm":
        return "w-16";
      case "md":
        return "w-36";
      case "lg":
        return "w-48";
      case "full":
        return "w-full";
      default:
        return "w-36";
    }
  }

  return(
    <div className={`${sizeToUnit(size) === "full"?"flex-1":""}`}>
      <label className="block text-gray-100">{label}</label>
      <input size={1} className={`shadow-sm border-none text-gray-100 bg-zinc-300 bg-opacity-30 rounded focus:shadow-lg focus:ring-green-500 focus:border-green-500 ${sizeToUnit(size)} `}  type="number" value={defaultValue} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export const CheckBoxInput = ({label, defaultValue, onChange}) => {
  return(
    <div>
      <label className="text-gray-100">{label}</label>
      <input className="bg-gray-400 rounded h-5 w-5 text-violet-400 focus:ring-violet-600 focus:border-none" type="checkbox" checked={defaultValue} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export const TextArea = ({label, defaultValue, onChange, rows}) => {
  return(
    <div>
      <label className="block">{label}</label>
      <textarea value={defaultValue} onChange={(e) => onChange(e.target.value)} rows={rows} cols={35} />
    </div>
  )
}