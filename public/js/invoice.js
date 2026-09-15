/**
 * ATELIER STUDIO - Invoice View & Print Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('printInvoiceBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
