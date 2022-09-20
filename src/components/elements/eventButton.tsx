<!-- Noscript content for added SEO -->
<noscript><a href="https://www.eventbrite.com/e/cry-cleanse-flow-tickets-421615381957" rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
<!-- You can customize this button any way you like -->
<button id="eventbrite-widget-modal-trigger-421615381957" type="button">Buy Tickets</button>

<script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

<script type="text/javascript">
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '421615381957',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-421615381957',
        onOrderComplete: exampleCallback
    });
</script>