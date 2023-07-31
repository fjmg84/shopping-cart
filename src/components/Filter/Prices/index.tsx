import styles from "./styles.module.scss";

type Props = {
  minorToMajor: () => void;
  majorToMinor: () => void;
};

function FilterPrices({ minorToMajor, majorToMinor }: Props) {
  return (
    <div className={styles.container}>
      <fieldset>
        Sort by prices
        <label>
          <input
            type="radio"
            name="orderProduct"
            id="minor_to_major"
            onClick={minorToMajor}
          />
          <i className="fa fa-arrow-up"></i>
        </label>
        <label>
          <input
            type="radio"
            name="orderProduct"
            id="major_to_minor"
            onClick={majorToMinor}
          />
          <i className="fa fa-arrow-down"></i>
        </label>
      </fieldset>
    </div>
  );
}

export default FilterPrices;
