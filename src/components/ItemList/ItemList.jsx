import ItemCard from "./itemCard"


const ItemList = ({ items }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap:"wrap",
      minHeight: "90vh",
      paddingTop:"100px",
    }}>
      {items.map((item) => {
        return (
          <ItemCard item={item} key={item.id}/>
        )
      })}
    </div>
  )
}

export default ItemList
