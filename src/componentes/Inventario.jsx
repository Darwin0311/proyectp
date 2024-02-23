import logoempresa from "../img/logoempresa.png";
import { Button } from "@nextui-org/button";
import Table from '../../components/Table.jsx';

export const Inventario = () => {
  return (
    <>
      <div className="nav">
        <img src={logoempresa} alt="Logo" className="navlg" />
        <h2 className="navh">SOFACTO</h2>
      </div>
      <div className="qrp">
        <Button className="bnts" color="primary" variant="shadow">
          Agregar producto
        </Button>
        
      </div>

    </>
  );
};
