from event_manager.mapper import eventMapper


def addEvent(event_data):
    eventMapper.addEvent(event_data)

def editEvent(event_data):
    eventMapper.editEvent(event_data)

def delEvent(event_data):
    eventMapper.delEvent(event_data)

def filterEventsByDate(date):
    events = eventMapper.filterEventsByDate(date)
    return events

def getEventsbyRange(startDate,endDate):
    events = eventMapper.filterEventsByRange(startDate,endDate)
    return events

def getEventByMonth(mon,year):
    events = eventMapper.filterEventsByMonth(mon,year)
    return events