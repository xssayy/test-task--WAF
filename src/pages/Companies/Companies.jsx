import CompaniesList from "../../components/CompaniesList/CompaniesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAllCompanies } from "../../redux/company/selectors";
import { getAllCompanies } from "../../redux/company/operations";

const Companies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);
  const companies = useSelector(selectAllCompanies) || [];
  return (
    <>
      <h2>Наші компанії</h2>
      {companies.length > 0 ? (
        <CompaniesList companies={companies} />
      ) : (
        <div>На жаль, список компаній порожній</div>
      )}
    </>
  );
};

export default Companies;
