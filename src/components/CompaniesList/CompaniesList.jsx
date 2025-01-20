import CompaniesListItem from "../CompaniesListItem/CompaniesListItem";
import styles from "./CompaniesList.module.css";

const CompaniesList = ({ companies }) => {
  return (
    <ul className={styles.companyList}>
      {companies.map((company) => (
        <li key={company._id}>
          <CompaniesListItem company={company} />
        </li>
      ))}
    </ul>
  );
};

export default CompaniesList;
