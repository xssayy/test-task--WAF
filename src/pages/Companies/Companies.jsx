import CompaniesList from "../../components/CompaniesList/CompaniesList";

const Companies = () => {
  const companies = [
    {
      name: "Компания А",
      description: "Описание компании А",
      id: 3314789127837813,
    },
    {
      name: "Компания B",
      description: "Описание компании B",
      id: 331124531231,
    },
    {
      name: "Компания C",
      description: "Описание компании C",
      id: 49781273917183,
    },
  ];

  return (
    <>
      <h2>Наші компанії</h2>
      <CompaniesList companies={companies} />
    </>
  );
};

export default Companies;
