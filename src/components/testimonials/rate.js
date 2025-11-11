function Rate({ stars }) {
  const totalStars = 5;

  return (
    <>
      {[...Array(totalStars)].map((_, index) => (
        <i
          key={index}
          className={`${
            index < stars ? "fa-solid" : "fa-regular"
          } fa-star text-warning`}
        ></i>
      ))}
    </>
  );
}

export default Rate;
