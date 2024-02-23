import RestCard from "./RestCard";
const RestList = ({topRestaurantsList})=>{

    return(
        <div className="rest-container">
        {topRestaurantsList.map((resturant) => {
          return <RestCard key={resturant.info?.id} restInfo={resturant} />;
        })}
      </div>
    );
}

export default RestList;