/**
 * ATELIER STUDIO - Client Dashboard Micro-interactions
 * Power user keyboard shortcuts, filter pill matrix, live search, and telemetry clock
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Studio Telemetry Clock
  const clockElement = document.getElementById('studioClock');
  if (clockElement) {
    const updateClock = () => {
      const now = new Date();
      clockElement.textContent = now.toTimeString().split(' ')[0] + ' UTC' + (now.getTimezoneOffset() > 0 ? '-' : '+') + Math.abs(now.getTimezoneOffset() / 60);
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  // 2. Power-User Keyboard Shortcuts (Section 6-1)
  // 'N' -> Navigate to New Project form
  // '/' -> Focus project search input
  // 'Esc' -> Clear search or blur input
  const searchInput = document.getElementById('projectSearch');

  document.addEventListener('keydown', (e) => {
    // Avoid triggering when user is actively typing in an input/textarea
    const activeTagName = document.activeElement.tagName.toLowerCase();
    const isTyping = activeTagName === 'input' || activeTagName === 'textarea' || activeTagName === 'select';

    if (e.key === '/' && !isTyping) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    } else if ((e.key === 'n' || e.key === 'N') && !isTyping) {
      // Navigate to /projects/new
      window.location.href = '/projects/new';
    } else if (e.key === 'Escape') {
      if (searchInput && document.activeElement === searchInput) {
        searchInput.value = '';
        triggerFilter();
        searchInput.blur();
      }
    }
  });

  // 3. Client-Side Filter Pills & Live Search Interaction
  const filterPillBtns = document.querySelectorAll('.filter-pill-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.getElementById('matrixEmptyState');
  const activeCountDisplay = document.getElementById('activeFilterCount');

  let currentFilter = 'all';

  function triggerFilter() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    projectCards.forEach(card => {
      const status = (card.getAttribute('data-status') || '').toLowerCase();
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const client = (card.getAttribute('data-client') || '').toLowerCase();

      const matchesStatus = currentFilter === 'all' || status === currentFilter.toLowerCase();
      const matchesQuery = query === '' || title.includes(query) || client.includes(query);

      if (matchesStatus && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (activeCountDisplay) {
      activeCountDisplay.textContent = visibleCount;
    }
  }

  filterPillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      triggerFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', triggerFilter);
  }
});
