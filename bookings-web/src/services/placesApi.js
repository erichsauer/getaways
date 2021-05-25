export const getPlaces = async (id) => {
  if (id) {
    const response = await fetch(`${process.env.BASE_URL}/places/${id}`);
    if (response.ok) {
      const json = await response.json();
      return {
        pricePerNight: json.price_per_night,
        imageThumbnail: json.image_thumbnail,
        maxGuests: json.max_guests,
        petFriendly: json.pet_friendly,
        ...json,
      };
    } else {
      throw new Error(await response.json());
    }
  } else {
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
  }
};
