export const GET_ALL_EVENTS = `query GetEventsForWebsite($status: String!, $page: Int!, $size: Int!, $searchText: String!) {
    getEventsForWebsite(status: $status, page: $page, size: $size, searchText: $searchText) {
      totalCount
      events {
        eventId
        eventName
        eventDate
        noOfParticipants
        eventStatus
        createdDate
        status
        eventSlug
        imageUrl
      }
    }
  }`;

export const GET_EVENT_BY_ID = `query getEventByIdForWebsite($eventSlug: String!){
    getEventByIdForWebsite(eventSlug: $eventSlug) {
        eventId,
        eventDescription,
        eventTitle,
        imageUrl,
        videoUrl,
        eventThumbnail,
        eventDate,
        sweepstakeRules,
    }
  }`;
