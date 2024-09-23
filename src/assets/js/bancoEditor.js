import { useState } from "react";

const bancoEditor = () => {
    const [dadosEdit, setDadosEdit] = useState([

    ]);

    return [dadosEdit,setDadosEdit]
}

export {bancoEditor}