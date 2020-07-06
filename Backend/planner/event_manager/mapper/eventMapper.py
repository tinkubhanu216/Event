import uuid
from .models.eventModel import Event


def addEvent(event_data):
    event = Event.objects.create(id=uuid.uuid1().hex)
    event.title = event_data['title']
    event.description = event_data['description']
    event.from_date = event_data['from_date']
    event.to_date = event_data['to_date']
    event.save()


def filterEventsByDate(date):
    events = Event.objects.filter(from_date__lte=date).filter(to_date__gte=date)
    return events
