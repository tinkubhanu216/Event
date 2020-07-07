import json
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from event_manager.services import eventService
from .serializers.serializer import EventSerializer


@api_view(['POST'])
@permission_classes({IsAuthenticated})
def addEvent(request):
    event_data = json.loads(request.body)
    eventService.addEvent(event_data)
    return JsonResponse({"detail": "EVENT ADDED"}, safe=False, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes({IsAuthenticated})
def filterEventsByDate(request):
    date = json.loads(request.body)['date']
    events = eventService.filterEventsByDate(date)
    serializer = EventSerializer(events, many=True)
    return JsonResponse(serializer.data, safe=False, status=status.HTTP_202_ACCEPTED)

@api_view(['POST'])
@permission_classes({IsAuthenticated})
def getEventsbyRange(request):
    startDate = json.loads(request.body)['startDate']
    endDate = json.loads(request.body)['endDate']
    events = eventService.getEventByRange(startDate,endDate)
    serializer = EventSerializer(events,many=True)
    return JsonResponse(serializer.data, safe=False, status=status.HTTP_202_ACCEPTED)