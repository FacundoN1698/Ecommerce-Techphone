export const Login = () => {
  let nombre = "Facundo"

  const saludar = () => {
    console.log("buenas tardes")
  }

  return (
    <div style={{ background: "steelblue" }}>
      <h1>Hola desde el componente login</h1>
      <h3> Mi nombre es {nombre} </h3>
      <button onClick={saludar}>Saludar</button>
    </div>
  )
}
