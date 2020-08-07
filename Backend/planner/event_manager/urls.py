from django.urls import path

from .controller import eventController

urlpatterns = [
    path('event/add', eventController.addEvent, name='add event'),
    path('event/edit', eventController.editEvent, name='edit event'),
    path('event/delete', eventController.delEvent, name='delete event'),
    path('event/filterByDate', eventController.filterEventsByDate, name='filter events by date'),
    path('event/getEventByMonth', eventController.getEventsbyMonth, name='Get Event By Month'),
    path('event/getEventsbyRange', eventController.getEventsbyRange, name='Get Event By Range'),
]