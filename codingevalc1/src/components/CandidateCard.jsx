import styles from "./CandidateCard.module.css";

function CandidateCard({
  avatar:url,
  name:Name,
  company_name,
  salary

}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={url} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {Name}</div>
        <div>{company_name}</div>
      </div>
      <div>$ {salary}</div>
    </div>
  );
}

export default CandidateCard;
