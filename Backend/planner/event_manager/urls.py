from django.urls import path

from .controller import eventController

urlpatterns = [
    path('event/add', eventController.addEvent, name='add event'),
    path('event/filterByDate', eventController.filterEventsByDate, name='filter events by date'),
    path('event/getEventByRange', eventController.getEventsbyRange, name='Get Event By Month'),
]