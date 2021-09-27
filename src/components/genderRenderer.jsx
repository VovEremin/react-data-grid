const genderRenderer = (props) => {
  const image = props.value === 'Male' ? 'male.png' : 'female.png';
  const imageSource = `https://www.ag-grid.com/example-assets/genders/${image}`;
  return (
    <span>
      <img alt={imageSource} src={imageSource} />
      {props.value}
    </span>
  );
};

export default genderRenderer