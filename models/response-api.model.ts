import * as t from 'io-ts';
import { PersonValidator } from './person.model';
import { PlanetValidator } from './planet.model';

export const ResponseApiValidator = <A, O = unknown>(T: t.Type<A, O>) => t.type({
  count: t.number,
  next: t.string,
  previous: t.union([t.string, t.null]),
  results: t.array(T)
});

/**
 * Instantiated expressions works only with typescript > 4.7
 */

export type ResponseApiModel<A> = t.TypeOf<ReturnType<typeof ResponseApiValidator<A>>>;

/*
Example of usage
*/

export const PersonResponseValidator = ResponseApiValidator(PersonValidator);
export type PersonResponseModel = t.TypeOf<typeof PersonResponseValidator>;

export const PlanetResponseValidator = ResponseApiValidator(PlanetValidator)
export type PlanetResponseModel = t.TypeOf<typeof PlanetResponseValidator>;