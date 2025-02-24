const CasaRow = ({ casa }) => {
    return (
      <tr>
        <td>{casa.address}</td>
        <td>{casa.country}</td>
        <td>{casa.price}</td>
      </tr>
    );
  };
  
  export default CasaRow;