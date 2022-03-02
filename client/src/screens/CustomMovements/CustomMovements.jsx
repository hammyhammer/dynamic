import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function CustomMovements() {
  return (
    <Layout>
      <div>

        <select>
          <option>
            Horizontal Push
          </option>
          <option>
            Horizontal Pull
          </option>
          <option>
            Vertical Push
          </option>
          <option>
            Vertical Pull
          </option>
          <option>
            Legs
          </option>
        </select>

      </div>
    </Layout>
  )
}
