### Elementi disabilitati

Elementi con la proprietà `disabled` non sono interattivi, il che significa che gli utenti non possono attivare il popover (o un tooltip) con il passaggio del mouse o facendo click su di essi. Come soluzione, ti consigliamo di attivare il popover da un componente `<div>` o `<span>` contenitore e sovrascrivere il `pointer-events` su un componente disabilitato.

<!-- STORY -->