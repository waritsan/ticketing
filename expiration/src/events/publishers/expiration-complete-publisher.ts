import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@waritsanticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
