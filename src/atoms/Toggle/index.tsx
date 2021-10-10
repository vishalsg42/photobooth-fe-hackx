import styles from "./toggle.module.scss";
import Columns from "@/components/blocks/Columns";

const Label = ({ label, switchValue, selected, onToggle }) => {
  return (
    <Columns className="is-mobile">
      <Columns.Column>
        <label className='cursor: pointer' htmlFor={switchValue}>
          {label}
        </label>
      </Columns.Column>
      <Columns.Column className="is-narrow">
        <Toggle active={selected} onClick={onToggle} name={switchValue} />
      </Columns.Column>
    </Columns>
  )
}
export default function Toggle({ onClick, active = false, name, className = '' }) {
  return (
    <>
      <input
        type="checkbox"
        className={styles.switch}
        name={name}
        checked={active}
        id={name}
        onChange={onClick}
      />
      <label className={className} htmlFor={name} />
    </>
  )
}

Toggle.Label = Label;


