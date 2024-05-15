require('dotenv').config();

const request = require('request');
const token = process.env.TOKEN_SCRAPE;
const targetUrl = "https://www.brou.com.uy/c/portal/render_portlet?p_l_id=20593&p_p_id=cotizacionfull_WAR_broutmfportlet_INSTANCE_otHfewh1klyS&p_p_lifecycle=0&p_t_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=0&p_p_col_count=2&p_p_isolated=1&currentURL=%2Fweb%2Fguest%2Fcotizaciones"
const HtmlTableToJson = require('html-table-to-json');
const fs = require('fs');

const encodedUrl = encodeURIComponent(targetUrl);

const options = {
    'method': 'GET',
    'url': `https://api.scrape.do?token=${token}&url=${encodedUrl}`,
    'headers': {}
};

request(options, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        getTable(response.body);
    }
});


function getTable(body){
    // get table from body
    const table = body.match(/<table[^>]*>[\s\S]*?<\/table>/gi);
    const jsonTables = new HtmlTableToJson(table.toString());
    const jsonData = JSON.stringify(jsonTables.results, null, 2); // Convertir a JSON bonito
    const datosLimpios = cleanData(JSON.parse(jsonData));

    fs.writeFile('output.json', JSON.stringify(datosLimpios), 'utf8', (err) => {
        if (err) {
            console.log("Ha ocurrido un error al guardar el archivo:", err);
        } else {
            console.log("Archivo guardado correctamente.");
        }
    });

}

function cleanData(jsonData) {
    return jsonData[0].map(item => ({
        Moneda: item["1"],
        Compra: item.Compra,
        Venta: item.Venta,
        ArbitrajeCompra: item["Arbitraje Compra"],
        ArbitrajeVenta: item["Arbitraje Venta"]
    }));
}