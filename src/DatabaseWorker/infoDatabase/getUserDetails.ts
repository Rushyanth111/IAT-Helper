import Token from 'uid-generator';
import {UserDetails} from '../../ResponseObjects';
import db from './infoCreate';
import {pick} from '../../Utiliy';
async function getUserDetails(email: string): Promise<UserDetails> {
  return new Promise((resolve, reject) => {
    db.findOne<UserDetails>({email: email}, function(
        err: Error,
        docs: UserDetails
    ) {
      if (!err) {
        resolve(
          pick(
              docs,
              'email',
              'username',
              'accountType',
              'accountId'
          ) as UserDetails
        );
      } else {
        reject(err);
      }
    });
  });
}

export default getUserDetails;
