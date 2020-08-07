import uuid
from .models.eventModel import Event
from django.db.models import Q

def addEvent(event_data):
    print(event_data)
    event = Event.objects.create(id=uuid.uuid1().hex,title=event_data['title'],description=event_data['description'],from_date=event_data['from_date'],from_time=event_data['from_time'],to_date=event_data['to_date'],to_time=event_data['to_time'])
    # event.title = event_data['title']
    # event.description = event_data['description']
    # event.from_date = event_data['from_date']
    # event.from_time = event_data['from_time']
    # event.to_date = event_data['to_date']
    # event.to_time = event_data['to_time']
    event.save()

def editEvent(event_data):
    # print(event_data)
    event = Event.objects.get(id=event_data['id'])
    event.title=event_data["title"]
    event.description=event_data["description"]
    event.from_date=event_data["from_date"]
    event.from_time=event_data["from_time"]
    event.to_date=event_data["to_date"]
    event.to_time=event_data["to_time"]
    event.save()

def delEvent(event_data):
    # print(event_data)
    event = Event.objects.get(id=event_data['id'])
    event.delete()

def filterEventsByDate(date):
    events = Event.objects.filter(from_date__lte=date).filter(to_date__gte=date)
    return events

def filterEventsByRange(startDate,endDate):
    events = Event.objects.filter(
        Q(to_date__gte=startDate,to_date__lte=endDate) |
        Q(from_date__gte=startDate,to_date__lte=endDate) |
        Q(from_date__gte=startDate,from_date__lte=endDate)
    ).order_by('from_date')
    return events
def filterEventsByMonth(month,year):
    print(month)
    print(year)
    events = Event.objects.filter(from_date__year__gte=year,
                              from_date__month__gte=month,
                              to_date__year__lte=year,
                              to_date__month__lte=month)
    return events
    