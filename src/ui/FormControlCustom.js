export default function FormLabel({ label, isRequired, type, placeholder }) {
  return (
    <div>
      <label>{label}{isRequired && <span>*</span>}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}
