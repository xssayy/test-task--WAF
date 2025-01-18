import CompaniesList from "../../components/CompaniesList/CompaniesList";

const Companies = () => {
  const companies = [
    { name: "Компания А", description: "Описание компании А" },
    { name: "Компания B", description: "Описание компании B" },
    { name: "Компания C", description: "Описание компании C" },
  ];

  return (
    <>
      <h2>Наші компанії</h2>
      <CompaniesList companies={companies} />
    </>
  );
};

export default Companies;
