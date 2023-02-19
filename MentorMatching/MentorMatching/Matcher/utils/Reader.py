from fuzzywuzzy import fuzz
import csv


class Entry:
    def __init__(self, question: str, answer: str) -> None:
        self.question = question
        self.answer = answer


class Person:
    def __init__(self) -> None:
        self.entries: list[Entry] = []

    def add_entry(self, question: str, answer: str) -> None:
        entry = Entry(question, answer)
        self.entries.append(entry)

    def display_enumerated_entries(self) -> None:
        for idx, entry in enumerate(self.entries):
            print(f"{idx}: {entry.question}")

    def get_all_entries(self) -> list[Entry]:
        return self.entries

    def get_entry_at_index(self, idx) -> Entry:
        return self.entries[idx]

    def get_question_at_index(self, idx) -> str:
        return self.entries[idx].question

    def get_answer_at_index(self, idx) -> str:
        return self.entries[idx].answer

    def print_entry_at_index(self, idx) -> None:
        print(
            f"Q: {self.entries[idx].question}\nA: {self.entries[idx].answer}")

    def __str__(self) -> str:
        return self.get_answer_at_index(10)


class Reader:

    def __init__(self, file_name: str) -> None:
        self.file_name = file_name
        self.data: list[Person] = []
        self.read_data()

    def read_data(self) -> None:
        decoded_file = self.file_name.read().decode('utf-8').splitlines()
        csvreader = csv.reader(decoded_file)
        questions_header = next(csvreader)
        for row in csvreader:
            person = Person()
            for index, answer in enumerate(row):
                person.add_entry(questions_header[index], answer)
            self.data.append(person)

    def get_data(self) -> list[Person]:
        return self.data


class Match:

    MAX_MATCHES = 3

    def __init__(self) -> None:
        self.mentee: Person = None
        self.matches: list[Person] = []

    def add_match(self, match: Person) -> bool:
        if len(self.matches <= self.MAX_MATCHES):
            self.matches.append(match)
            return True
        return False


class Matcher:

    def __init__(self, question_pairs: list[tuple[int, int]], mentee_questions: list[Entry], mentor_questions: list[Entry]) -> None:
        self.question_pairs = question_pairs
        self.mentee_questions = mentee_questions
        self.mentor_questions = mentor_questions
        self.matches: list[Match] = []

    def generate_matches(self) -> None:
        pass

    def go_through_data(self) -> None:
        for mentee_index, mentee in enumerate(self.mentee_questions):
            for mentor_index, mentor in enumerate(self.mentor_questions):
                print(f"Mentee: {mentee_index} and Mentor: {mentor_index}")
                total_score = self.tally_score(mentee, mentor)
                print(f"Total score: {total_score}\n")

    def tally_score(self, mentee: Person, mentor: Person) -> int:
        score = 0

        for mentee_question_index, mentor_question_index in self.question_pairs:
            print(
                f"Mentee was asked: {mentee.get_question_at_index(mentee_question_index)}")
            print(
                f"Mentor was asked: {mentor.get_question_at_index(mentor_question_index)}")

            mentee_answer = mentee.get_answer_at_index(mentee_question_index)
            mentor_answer = mentor.get_answer_at_index(mentor_question_index)
            score += self.get_score(mentee_answer, mentor_answer)

        return score

    def get_score(self, mentee_answer: str, mentor_answer: str) -> int:
        score = fuzz.token_sort_ratio(mentee_answer, mentor_answer)
        print(
            f"Mentee answered: \"{mentee_answer}\"\nMentor answered: \"{mentor_answer}\"\nScore: {score}")
        return score
