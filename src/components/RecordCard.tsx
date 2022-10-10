import { Models } from 'appwrite';
import moment from 'moment';

function RecordCard({ record }: { record: Models.Document }) {
  return (
    <div>
      {record.rank} , {record.rating} , {record.changed < 0 ? '' : '+'}
      {record.changed} , {moment(record.$createdAt).fromNow()}
    </div>
  );
}

export default RecordCard;
