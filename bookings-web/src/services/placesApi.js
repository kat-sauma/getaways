export const getPlaces = async () => {
  const response = await fetch(`${process.env.BASE_URL}/places`);
  if (response.ok) {
    const result = await response.json();
    return result.map(
      ({
        price_per_night,
        image_thumbnail,
        max_guests,
        pet_friendly,
        ...place
      }) => ({
        ...place,
        pricePerNight: price_per_night,
        imageThumbnail: image_thumbnail,
        maxGuests: max_guests,
        petFriendly: pet_friendly,
      })
    );
  } else {
    throw new Error(await response.json());
  }
};


export const getPlaceById = async (id) => {
   const res = await fetch(`${process.env.BASE_URL}/places/${id}`);

   if (res.ok) {
   const place = await res.json();
    
   return {
      name: place.name,
      description: place.description,
      location: place.location,
      pricePerNight: place.price_per_night,
      image: place.image,
      imageThumbnail: place.image_thumbnail,
      maxGuests: place.max_guests,
      petFriendly: place.pet_friendly,
      pool: place.pool,
      wifi: place.wifi
   }
  } else {
    throw new Error(await res.json());
  }
};