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
