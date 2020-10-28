const apiKey = "UkIepJvq1_PgTpcy-zbiA8QnIshatyDBhT59rRUq3S8T-QqcRo2QqsNHk6JeturidVYzV_Kpx3fwdq9tSfGXqBF8jOU-ADwA_8rqv01UWy9bwSMV_kc8juOXSPVxX3Yx";

let Yelp = {

    search(term, location, sortBy){
        return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        { headers: {Authorization: `Bearer ${apiKey}`}
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
        if(jsonResponse.businesses) {
            console.log(jsonResponse)
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.reviewCount,
                    url: business.url,
                    phone: business.display_phone
                }
            });
        } else console.log('Error')
    })
    }
}

export default Yelp