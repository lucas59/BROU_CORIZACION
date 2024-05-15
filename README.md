
# ScrapBrou

ScrapBrou es una herramienta que extrae datos de cotizaciones de la página web del Banco de la República Oriental del Uruguay (BROU) y los convierte en un formato JSON limpio. Esta herramienta está diseñada para ser fácil de usar y rápida en la obtención y procesamiento de los datos.

## Requisitos

- Node.js (v12 o superior)
- NPM (v6 o superior)

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/scrapbrou.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd scrapbrou
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en el directorio raíz del proyecto con tu token de Scrape.do:

    ```bash
    TOKEN_SCRAPE=tu_token_aqui
    ```

## Uso

Para iniciar la herramienta, ejecuta el siguiente comando:

```bash
npm start
```

Este comando iniciará el proceso de scraping y guardará los datos obtenidos en un archivo `output.json`.

## Estructura del Proyecto

- **index.js**: Archivo principal que maneja el proceso de scraping y procesamiento de datos.
- **.env**: Archivo de configuración para el token de Scrape.do.
- **output.json**: Archivo de salida donde se guardan los datos obtenidos.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- `dotenv`: Para cargar variables de entorno desde un archivo `.env`.
- `html-table-to-json`: Para convertir tablas HTML en formato JSON.
- `request`: Para hacer solicitudes HTTP.

## Scripts

- `start`: Inicia la herramienta de scraping.
- `test`: Comando placeholder para pruebas (actualmente no implementado).

## Autor

Tu Nombre - [lucasciceri59@gmail.com](mailto:lucasciceri59@gmail.com)

## Licencia

Este proyecto está licenciado bajo la licencia ISC. Puedes ver el archivo [LICENSE](LICENSE) para más detalles.

---

Si tienes alguna pregunta o sugerencia, no dudes en contactarme. ¡Espero que esta herramienta te sea útil!
