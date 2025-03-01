export default function NotFound() {
    return (
        <div className="flex items-center justify-center bg-dark bg-opacity-75 p-5"
            style={{ height: 1000 }}>
            <div className="bg-dark bg-opacity-75 card text-white text-center p-10 rounded-lg shadow-lg align-content-center">
                <h1 className="text-6xl font-bold text-gray-300">404</h1>
                <p className="text-xl text-gray-400 mt-4">Página no encontrada :c</p>
                <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
                    Volver al inicio
                </a>
            </div>
        </div>
    );
}
