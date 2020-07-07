from event_manager.mapper import eventMapper


def addEvent(event_data):
    eventMapper.addEvent(event_data)


def filterEventsByDate(date):
    events = eventMapper.filterEventsByDate(date)
    return events

def getEventByRange(startDate,endDate):
    events = eventMapper.filterEventsByRange(startDate,endDate)
    return events