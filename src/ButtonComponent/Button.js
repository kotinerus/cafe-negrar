import "./ButtonStyles.css";

export function Button({ children, classPar }) {
  return <button className={`btn-info ${classPar} `}>{children}</button>;
}
