import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor() { }

  private issues: Issue[] = issues;

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue =>
      !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date()
    };
    const index = issues.findIndex(element =>
      element === issue);
    this.issues[index] = selectedIssue;
  }

  getSuggestions(title: string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue =>
        issue.title.toLowerCase().indexOf(title.toLocaleLowerCase()) !== -1);
    }
    return [];
  }
}
