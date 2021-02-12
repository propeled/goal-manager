import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { API, graphqlOperation} from 'aws-amplify'
import { listPaths } from "../../graphql/queries";
import { createPath } from "../../graphql/mutations";
import { useEffect, useState } from "react";
import { GraphQLResult, GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import { Path } from "../../models";
import { CreatePathMutation, CreatePathMutationVariables, ListPathsQuery } from "../../API";
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);


export default function MainPage() {
  const [paths, setPaths] = useState<Path[]>([])
  var state = {
    name: "",
    description: ""
  }

  function setName(newName: string) {
    state.name = newName
  }

  function setDescription(newDescription: string) {
    state.description = newDescription
  }

  function mapListTodosQuery(listTodosQuery: GraphQLResult<ListPathsQuery>): Path[] {
    return listTodosQuery.data?.listPaths?.items?.map(path => ({
      id: path?.id,
      name: path?.name,
      description: path?.description
    } as Path)) || []
  }

  interface GraphQLOptions {
    input?: object;
    variables?: object;
    authMode?: GRAPHQL_AUTH_MODE;
  }

  async function callGraphQL<T>(query: any, options: GraphQLOptions): Promise<GraphQLResult<T>> {
    return (await API.graphql(graphqlOperation(query, options))) as GraphQLResult<T>
  }
  

  async function fetchPaths() {
    try {
      const pathData = await callGraphQL<ListPathsQuery>(listPaths, {});
      const paths = mapListTodosQuery(pathData)
      setPaths(paths)
    } catch (err) { console.log(err)}
  }

  async function addPath(name: string, description: string) {
    try {
      await callGraphQL<CreatePathMutation>(createPath, {
        input: { name, description},
      } as CreatePathMutationVariables)
    } catch (err) { console.log(err)}
  }

  useEffect(() => {
    fetchPaths()
  }, [])

  return <Container fluid>
    <Row>
      <Col>
        <h1>Paths</h1>
        {paths?.map(path => (
          <div>
            <h2>{path.name}</h2>
            <p>{path.description}</p>
          </div>
        )
        )}
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              onChange={e => setName(e.target.value)} 
              type="name" placeholder="Your new path" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              onChange={e => setDescription(e.target.value)} 
              rows={3} />
          </Form.Group>
        </Form>
        <Button onClick={() => addPath(state.name, state.description)}>Add path</Button>
      </Col>
      <Col>2 of 2</Col>
    </Row>
  </Container>
}