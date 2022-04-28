import Chart from "../../components/topbar/chart/Chart"
import Featureinfo from "../../components/topbar/featureInfo/Featureinfo"
import "./home.css"
import {dataFilme, dataSerie} from "../../data.js"

export default function Home() {
  return (
    <div className="home">
        <Featureinfo/>
        <Chart data={dataFilme} title="Análise de Filmes" grid dataKey1="Filme"/>
        <Chart data={dataSerie} title="Análise de Séries" grid dataKey1="Série"/>
    </div>
  )
}
