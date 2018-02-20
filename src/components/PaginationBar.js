//
// import React, { PropTypes } from 'react';
//
//
// const propTypes = {
//     items: PropTypes.array.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     initialPage: PropTypes.number
// }
//
// const defaultProps = {
//     initialPage: 1
// }
//
// class PaginationBar extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			pager: {}
// 		};
// 	}
//
// 	componentWillMount() {
// 			 // establecer página si la matriz de elementos no está vacía
// 			 if (this.props.items && this.props.items.length) {
// 					 this.setPage(this.props.initialPage);
// 			 }
// 	 }
//
// 	 componentDidUpdate(prevProps, prevState) {
// 			 // reiniciar la página si la matriz de elementos ha cambiado
// 			 if (this.props.items !== prevProps.items) {
// 					 this.setPage(this.props.initialPage);
// 			 }
// 	 }
//
// 	 setPage(page) {
// 			 let items = this.props.items;
// 			 let pager = this.state.pager;
//
// 			 if (page < 1 || page > pager.totalPages) {
// 					 return;
// 			 }
//
// 			 // obtener un nuevo objeto de página para una página específica
// 			 pager = this.getPager(items.length, page);
//
// 			 // obtener nueva página de elementos de la matriz de elementos
// 			 let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
//
// 			 // estado de actualización
// 			 this.setState({ pager: pager });
//
// 			 // llamar a la función de cambio de página en el componente principal
// 			 this.props.onChangePage(pageOfItems);
// 	 }
//
// 	 getPager(totalItems, currentPage, pageSize) {
//         // predeterminado a la primera página
//         currentPage = currentPage || 1;
//
//         // el tamaño de página predeterminado es 10
//         pageSize = pageSize || 10;
//
//         // calcular el total de páginas
//         var totalPages = Math.ceil(totalItems / pageSize);
//
//         var startPage, endPage;
//         if (totalPages <= 10) {
//             // menos de 10 páginas en total, así que muestre todo
//             startPage = 1;
//             endPage = totalPages;
//         } else {
//             // más de 10 páginas en total así que calcule las páginas de inicio y finalización
//             if (currentPage <= 6) {
//                 startPage = 1;
//                 endPage = 10;
//             } else if (currentPage + 4 >= totalPages) {
//                 startPage = totalPages - 9;
//                 endPage = totalPages;
//             } else {
//                 startPage = currentPage - 5;
//                 endPage = currentPage + 4;
//             }
//         }
//
// 				// calcule los índices de elementos de inicio y final
//         let startIndex = (currentPage - 1) * pageSize;
//         let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
//
//         // crear una matriz de páginas para ng-repeat en el control de buscapersonas
//         let pages = pages.range(startPage, endPage + 1);
//
//         // objeto de retorno con todas las propiedades del buscapersonas requeridas por la vista
//         return {
//             totalItems: totalItems,
//             currentPage: currentPage,
//             pageSize: pageSize,
//             totalPages: totalPages,
//             startPage: startPage,
//             endPage: endPage,
//             startIndex: startIndex,
//             endIndex: endIndex,
//             pages: pages
//         };
//     }
//
// 		render() {
// 	        let pager = this.state.pager;
//
// 	        if (!pager.pages || pager.pages.length <= 1) {
// 	            // no muestre el busca páginas si solo hay 1 página
// 	            return null;
// 	        }
//
// 	        return (
// 	            <ul className="pagination">
// 	                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
// 	                    <a onClick={() => this.setPage(1)}>First</a>
// 	                </li>
// 	                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
// 	                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
// 	                </li>
// 	                {pager.pages.map((page, index) =>
// 	                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
// 	                        <a onClick={() => this.setPage(page)}>{page}</a>
// 	                    </li>
// 	                )}
// 	                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
// 	                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
// 	                </li>
// 	                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
// 	                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
// 	                </li>
// 	            </ul>
// 	        );
// 	    }
// 	}
//
// PaginationBar.propTypes = propTypes;
// PaginationBar.defaultProps = defaultProps;
//
// export default PaginationBar;


import React from 'react';
class PaginationBar extends React.Component {
render() {
	return (

		<div className="pagination">
			<button className="pagination-page">Anterior</button>
			<button className="button-page">1</button>
			<button className="button-page">2</button>
			<button className="button-page">3</button>
			<button className="button-page">4</button>
			<button className="button-page">5</button>
			<button className="pagination-page">Siguiente</button>
		</div>
	);
}
}

export default PaginationBar;
