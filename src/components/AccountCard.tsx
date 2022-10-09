import { Models } from 'appwrite';
import moment from 'moment';
import useListRecords from '../hooks/useListRecords';

function AccountCard({ account }: { account: Models.Document }) {
  const { records } = useListRecords(account.$id);

  return (
    <div>
      id: {account.accountName}
      <br />
      region: {account.region} <br />
      rank: {account.rank} <br />
      rating: {account.rating} <br />
      <hr />
      {records?.map((record) => (
        <div key={record.$id}>
          {record.rank} , {record.rating} , {record.diff < 0 ? '' : '+'}
          {record.diff} , {moment(record.$createdAt).fromNow()}
        </div>
      ))}
      <hr />
    </div>
  );
}

export default AccountCard;
