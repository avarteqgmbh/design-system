import { GridLocaleText } from '@mui/x-data-grid-pro'

export const GRID_DE_LOCALE_TEXT: GridLocaleText = {
  noRowsLabel: 'Keine Daten vorhanden',
  noResultsOverlayLabel: 'Keine Ergebnisse gefunden.',
  errorOverlayDefaultLabel: 'Ein Fehler ist aufgetreten.',

  // Density selector toolbar button text
  toolbarDensity: 'Dichte',
  toolbarDensityLabel: 'Dichte',
  toolbarDensityCompact: 'Kompakt',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Komfortabel',

  // Columns selector toolbar button text
  toolbarColumns: 'Spalten',
  toolbarColumnsLabel: 'Wähle Spalten',

  // Filters toolbar button text
  toolbarFilters: 'Filter',
  toolbarFiltersLabel: 'Zeige Filter',
  toolbarFiltersTooltipHide: 'Verstecke Filter',
  toolbarFiltersTooltipShow: 'Zeige Filter',
  toolbarFiltersTooltipActive: (count) => {
    return count !== 1 ? `${count} aktive Filter` : `${count} aktiver Filter`
  },

  // Export selector toolbar button text
  toolbarExport: 'Export',
  toolbarExportLabel: 'Export',
  toolbarExportCSV: 'Als CSV herunterladen',
  toolbarExportPrint: 'Drucken',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Spalten finden',
  columnsPanelTextFieldPlaceholder: 'Spalten Titel',
  columnsPanelDragIconLabel: 'Spalten umsortieren',
  columnsPanelShowAllButton: 'Zeige alle',
  columnsPanelHideAllButton: 'Verstecke alle',

  // Filter panel text
  filterPanelAddFilter: 'Filter hinzufügen',
  filterPanelDeleteIconLabel: 'Löschen',
  filterPanelOperators: 'Operator',
  filterPanelOperatorAnd: 'Und',
  filterPanelOperatorOr: 'Oder',
  filterPanelColumns: 'Spalten',
  filterPanelInputLabel: 'Wert',
  filterPanelInputPlaceholder: 'Wert filtern',

  // Filter operators text
  filterOperatorContains: 'Enthält',
  filterOperatorEquals: 'Ist gleich',
  filterOperatorStartsWith: 'Beginnt mit',
  filterOperatorEndsWith: 'Endet mit',
  filterOperatorIs: 'ist',
  filterOperatorNot: 'ist nicht',
  filterOperatorAfter: 'ist nach',
  filterOperatorOnOrAfter: 'ist auf oder nach',
  filterOperatorBefore: 'ist vor',
  filterOperatorOnOrBefore: 'ist auf oder vor',
  filterOperatorIsEmpty: 'ist leer',
  filterOperatorIsNotEmpty: 'ist nicht leer',

  // Filter values text
  filterValueAny: '',
  filterValueTrue: 'Ja',
  filterValueFalse: 'Nein',

  // Column menu text
  columnMenuLabel: 'Menü',
  columnMenuShowColumns: 'Zeige Spalten',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Verstecken',
  columnMenuUnsort: 'Sortierung aufheben',
  columnMenuSortAsc: 'Aufsteigend sortieren',
  columnMenuSortDesc: 'Absteigend sortieren',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) => {
    return count !== 1 ? `${count} aktive Filter` : `${count} aktiver Filter`
  },

  columnHeaderFiltersLabel: 'Zeige Filter',
  columnHeaderSortIconLabel: 'Sortieren',

  // Rows selected footer text
  footerRowSelected: (count) => {
    return count !== 1
      ? `${count.toLocaleString()} Reihen ausgewählt`
      : `${count.toLocaleString()} Reihe ausgewählt`
  },

  // Total rows footer text
  footerTotalRows: 'Reihen gesamt:',

  // Total visible rows footer text
  footerTotalVisibleRows: (visibleCount, totalCount) => {
    return `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`
  },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Checkbox Auswahl',

  // Boolean cell text
  booleanCellTrueLabel: 'wahr',
  booleanCellFalseLabel: 'falsch',

  actionsCellMore: 'Mehr',

  // Used core components translation keys
  MuiTablePagination: {}
}
